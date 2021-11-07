import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedData } from 'app/Shared/sharedClass';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PromocodesService {
  token = JSON.parse(localStorage.getItem("headerToken"));
  results;
  active: any;
  constructor(private toastr : ToastrService,
    private router: Router,) { }

  
async GetPromo() {
  const request = new Request(`${SharedData.BASE_URL}payments/promocodes`,
  { method: 'GET',
  });
        request.headers.delete('Content-Type');
        request.headers.append('Content-Type', 'application/json');
       request.headers.append('x-auth-token', this.token);
            request.headers.append('lang', 'ar');
        const response = await fetch( request);
  const responsedata = await response.json();
  this.results = responsedata;
  return this.results;
}


async Activation(element) {
  const data = {_id:element._id};
const bodyobj = JSON.stringify(data);
const request = new Request(`${SharedData.BASE_URL}payments/promocodes/changeState`,
{
method: 'PUT',
body: bodyobj
});
request.headers.delete('Content-Type');
request.headers.append('Content-Type', 'application/json');
request.headers.append('x-auth-token', this.token);
        const response = await fetch( request);
  const result = await response.json();
    this.toastr.info('Change State');
  this.active = result;
  return this.active;
}
}
