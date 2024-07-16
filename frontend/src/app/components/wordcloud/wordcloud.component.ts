

import { Component, VERSION ,OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
declare var require: any;
import ExportData from 'highcharts/modules/export-data';
import Accessibility from 'highcharts/modules/accessibility';
import Wordcloud from 'highcharts/modules/wordcloud';
HC_more(Highcharts);

import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);

import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);

ExportData(Highcharts);


Accessibility(Highcharts);

Wordcloud(Highcharts);


import * as newdata from './data';

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrl: './wordcloud.component.css'
})
export class WordcloudComponent  implements OnInit{


  public activity:any;
  public xData:any;
  public label:any;
  options:any;
 

   
  constructor() {
  var obj:any;
  var text = 'Education For betterment As all we know that, in front of GOD we are equal. GOD gave us similar power  in front of GOD we are equal. GOD gave us similar power to all. He is not did any partiality for creating all of us. Instead all those we create this Reservation Education For betterment system which force us to create discrimination among us. Because of this discrimination there are many social hazards taking place. Education For betterment As all we are in front of GOD we are equal. GOD gave us similar power Human, so we maintain it also. Not accepting any Reservation Education For betterment system. Education For betterment It hampering our mentality. It also create many social violence. Today I like to create many social violence. Today I like to Education For betterment convey all of you about this harmful and Education For betterment violent system that already playing it’s game among us.';
   obj ={name:'',weight:0}
var lines = text.split(/[,\. ]+/g),
    data = Highcharts.reduce(lines, function (arr:any, word:any) {
        
        obj = Highcharts.find(arr, function (obj:any) {
            return obj.name === word;
        });
        if (obj) {
         
             obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

    this.options = {
    accessibility: {
        screenReaderSection: {
            beforeChartFormat: '<h5>{chartTitle}</h5>' +
                '<div>{chartSubtitle}</div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{viewTableButton}</div>'
        }
    },
    series: [{
        type: 'wordcloud',
        data: data,
        name: 'Occurrences'
    }],
    title: {
        text: ''
    }
};
}

  ngOnInit(){

    Highcharts.chart('container', this.options);
  }
}