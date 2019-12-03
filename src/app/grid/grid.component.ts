import { Component, OnInit, ViewChild } from '@angular/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { GridService } from '../services/grid.service';
import { AgGridAngular } from '@ag-grid-community/angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  @ViewChild('agGrid', { static: true}) agGrid: AgGridAngular;

  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
    {headerName: 'Model', field: 'model', sortable: true, filter: true },
    {headerName: 'Price', field: 'price', sortable: true, filter: true },
    {headerName: 'Price', children: [
      {headerName: 'Make', field: 'make', sortable: true, filter: true},
      {headerName: 'Model', field: 'model', sortable: true, filter: true },
      {headerName: 'Price', field: 'price', sortable: true, filter: true }
    ]}
  ];
  
  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];

  // columnDefs = [
  //   {headerName: 'Make', field: 'make', rowGroup: true },
  //   {headerName: 'Price', field: 'price'}
  // ];

  // autoGroupColumnDef = {
  //     headerName: 'Model',
  //     field: 'model',
  //     cellRenderer: 'agGroupCellRenderer',
  //     cellRendererParams: {
  //         checkbox: true
  //     }
  // };

  rowData: any;
  
  modules = AllCommunityModules;

  constructor(private service: GridService){
  }

  ngOnInit(): void {
    this.rowData = this.service.getAll();
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
