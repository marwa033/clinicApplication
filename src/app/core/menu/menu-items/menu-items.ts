import { Injectable } from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
	 state: 'crm',
	 name: 'الرئسية',
	 type: 'button',
	 icon: 'home',
  },
  {
	 state: 'dashboard',
	 name: 'المنتجات',
	 type: 'sub',
	 icon: 'home',
	 children: [
		{state: 'products', name: 'عرض'},
		{state: 'addproduct', name: 'اضف'}
	 ]
  },
  {
	 state: 'dashboard',
	 name: 'الفئات',
	 type: 'sub',
	 icon: 'home',
	 children: [
		{state: 'category', name: 'عرض'},
		{state: 'addcategory', name: 'اضف'}
	 ]
  },
  {
	 state: 'dashboard',
	 name: 'المنطقة',
	 type: 'sub',
	 icon: 'home',
	 children: [
		{state: 'district', name: 'عرض'},
		{state: 'adddistrict', name: 'اضف'}
	 ]
  },
  {
	 state: 'dashboard',
	 name: 'العنوان',
	 type: 'sub',
	 icon: 'home',
	 children: [
		{state: 'address', name: 'عرض'},
		{state: 'addaddress', name: 'اضف'}
	 ]
  },
  {
	 state: 'dashboard',
	 name: 'اعلانات',
	 type: 'sub',
	 icon: 'home',
	 children: [
		{state: 'ads', name: 'عرض'},
		{state: 'addads', name: 'اضف'}
	 ]
  },
  {
	 state: 'dashboard',
	 name: 'خصومات',
	 type: 'sub',
	 icon: 'home',
	 children: [
		{state: 'promo', name: 'عرض'},
		{state: 'addpromo', name: 'اضف'}
	 ]
  },
  {
	 state: 'dashboard',
	 name: 'المشرفين',
	 type: 'sub',
	 icon: 'home',
	 children: [
		{state: 'admins', name: 'عرض'},
		{state: 'addadmin', name: 'اضف'}
	 ]
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
	 return MENUITEMS;
  }
  add(menu:any) {
	 MENUITEMS.push(menu);
  }
}
