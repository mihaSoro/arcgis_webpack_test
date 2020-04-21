import esri = __esri;

import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { tsx } from "esri/widgets/support/widget";

import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import SceneView from "esri/views/SceneView";
import Widget from "esri/widgets/Widget";
import esriConfig from "esri/config";


import AppViewModel, { AppParams } from "./App/AppViewModel";


interface AppViewParams extends AppParams, esri.WidgetProperties {}

const CSS = {
  base: "main",
  webmap: "webmap"
};


@subclass("app.widgets.webmapview")
export default class App extends declared(Widget) {
  @property() viewModel = new AppViewModel();


  @aliasOf("viewModel.map") map: EsriMap;

  @aliasOf("viewModel.view") view: __esri.MapView;

  @aliasOf("viewModel.sceneView") sceneView: __esri.SceneView;


  
 
  constructor(params: Partial<AppViewParams>) {
    
    super(params);

    console.log("constructor app.tsx");
   
   
  } 


  postInitialize(){

   

  }

  render() {

    
    return (
      <div class={CSS.base}>
        <div class={CSS.webmap} bind={this} afterCreate={this.onAfterCreate} />
      </div>
    );
  }


  private onAfterCreate(element: HTMLDivElement) {

    this.map = new EsriMap({
        basemap: "gray-vector"
      });
      
    this.sceneView = new SceneView({
        map:this.map,
        container:element,
        center: [35,33],
        zoom: 2
    });
       

  }






  
}



