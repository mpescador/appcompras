import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map';



@Injectable()
export class ProveedoresService {

  provURL = 'https://comprasapp-53147.firebaseio.com/proveedores.json';
  proURL = 'https://comprasapp-53147.firebaseio.com/proveedores';


  constructor(private http: Http) { }

  postProveedor(proveedor: any) {
    const newpres = JSON.stringify(proveedor);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.provURL, newpres, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      });
  }

  getProveedores() {
    return this.http.get( this.provURL )
        .map(
          res => res.json()
        );
  }

  getProveedor(id$: string) {
     const url = `${this.proURL}/${id$}.json`;
     return this.http.get(url)
        .map( res => res.json());
  }

  putProveedor(proveedor: any, id$: string) {
    const newpre = JSON.stringify(proveedor);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.proURL}/${id$}.json`;

    return this.http.put( url, newpre, {headers})
        .map ( res => {
          console.log(res.json());
          return res.json();
        });

  }

  delProveedor ( id$: string) {
    const url = `${this.proURL}/${id$}.json`;
    return this.http.delete( url )
        .map ( res => res.json() );
  }

  getProveedoresSearch(busqueda: string) {
    const url = `${ this.provURL }?orderBy="nombre"&startAt="${ busqueda }"&endAt="${ busqueda }\uf8ff"`;
    return this.http.get(url)
       .map (res => res.json());
  }


  /* proveedores: any = [
    {
      nombre: 'Telefónica',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellana, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 911111111,
      email: 'info@telefonica.com',
      contacto: 'Juan Pérez'
    },
    {
      nombre: 'Iberdrola',
      cif: 'B87654321',
      direccion: 'Príncipe de Vergara, 200',
      cp: '28.015',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 922222222,
      email: 'info@iberdrola.com',
      contacto: 'Laura Martínez'
    }
];

  getProveedores() {
    return this.proveedores;
  } */

}
