import Accessor from "esri/core/Accessor";
import { whenOnce, watch } from "esri/core/watchUtils";
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import SceneView from "esri/views/SceneView";


import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";


export interface AppParams {
  map: EsriMap;
  view: MapView;
  sceneView: SceneView;
}

@subclass("widgets.App.AppViewModel")
class AppViewModel extends declared(Accessor) {
  @property() map: EsriMap;
  @property() view: MapView;
  @property() sceneView: SceneView;



  constructor(params?: Partial<AppParams>) {
    super(params);
    watch(this, "sceneView", this.onload3D.bind(this));
   
    
  }

  onload3D(){
      console.log("Scene view loaded");
  }
}

export default AppViewModel;