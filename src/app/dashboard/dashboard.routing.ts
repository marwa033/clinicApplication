import { Routes } from '@angular/router';
import { SaasComponent } from './saas/saas.component';
import { CrmComponent } from './crm/crm.component';
import { AdddistrictComponent } from './district/adddistrict/adddistrict.component';
import { DistrictComponent } from './district/district.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { CategoryComponent } from './category/category.component';
import { AddAddressComponent } from './address/add-address/add-address.component';
import { AddressComponent } from './address/address.component';
import { AddAdsComponent } from './ads/add-ads/add-ads.component';
import { AdsComponent } from './ads/ads.component';
import { AddPromoComponent } from './promocodes/add-promo/add-promo.component';
import { PromocodesComponent } from './promocodes/promocodes.component';
import { AddProductsComponent } from './products/add-products/add-products.component';
import { ProductsComponent } from './products/products.component';
import { AddAdminsComponent } from './admins/add-admins/add-admins.component';
import { AdminsComponent } from './admins/admins.component';



export const DashboardRoutes: Routes = [
   {
      path: '',
      redirectTo: 'crm',
      pathMatch: 'full'
   },
   {
      path: '',
      children: [
         {
            path: 'showcategory',
            component: SaasComponent
         },
         {
            path: 'crm',
            component : CrmComponent
         },
         {
         path: 'district',
         component: DistrictComponent
         },
         {
         path: 'adddistrict',
         component: AdddistrictComponent
         },
         {
         path: 'adddistrict/:id',
         component: AdddistrictComponent
         },
         {
         path: 'category',
         component: CategoryComponent
         },
         {
         path: 'addcategory',
         component: AddcategoryComponent
         },
         {
         path: 'addcategory/:id',
         component: AddcategoryComponent
         },
         {
         path: 'address',
         component: AddressComponent
         },
         {
         path: 'addaddress',
         component: AddAddressComponent
         },
         {
         path: 'addaddress/:id',
         component: AddAddressComponent
         },
         {
         path: 'ads',
         component: AdsComponent
         },
         {
         path: 'addads',
         component: AddAdsComponent
         },
         {
         path: 'addads/:id',
         component: AddAdsComponent
         },
         {
         path: 'promo',
         component: PromocodesComponent
         },
         {
         path: 'addpromo',
         component: AddPromoComponent
         },
         {
         path: 'addpromo/:id',
         component: AddPromoComponent
         },
         {
         path: 'products',
         component: ProductsComponent
         },
         {
         path: 'addproduct',
         component: AddProductsComponent
         },
         {
         path: 'addproduct/:id',
         component: AddProductsComponent
         },
         {
         path: 'admins',
         component: AdminsComponent
         },
         {
         path: 'addadmin',
         component: AddAdminsComponent
         },
         {
         path: 'addadmin/:id',
         component: AddAdminsComponent
         },
         ]
   }
];

