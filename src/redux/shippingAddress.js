import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  CLEAR_PROGRAM: "CLEAR_PROGRAM",
  CREATE_SHIPPINGADDRESS: "CREATE_SHIPPINGADDRESS",
}

export const clearProgram = () => ({
  type: types.CLEAR_PROGRAM
})

export const shippingAddress = (
     taxInvoice, username, lastname, telephone,addressUser,subdistrictUser,districtUser,provinceUser,zipcodeUser,
    InvoicePerson,InvoiceTaxpayerName,InvoiceTaxIdentificationNumber,InvoiceTelephone,useShippingAddress,
    InvoiceAddressUser,InvoiceSubdistrict,InvoiceDistrict,InvoiceProvince,InvoiceZipcode  
    ) => ({
  type: types.CREATE_SHIPPINGADDRESS,
  payload: {
    taxInvoice, 
    username, 
    lastname, 
    telephone,
    addressUser,
    subdistrictUser,
    districtUser,
    provinceUser,
    zipcodeUser,
    InvoicePerson,
    InvoiceTaxpayerName,
    InvoiceTaxIdentificationNumber,
    InvoiceTelephone,
    useShippingAddress,
    InvoiceAddressUser,
    InvoiceSubdistrict,
    InvoiceDistrict,
    InvoiceProvince,
    InvoiceZipcode 
  }  
})


/* END OF ACTION Section */

/* SAGA Section */



export function* saga() {
  yield all([

  ]);

}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
    create_shippingAddress_taxInvoice: null, 
    create_shippingAddress_username: null, 
    create_shippingAddress_lastname: null, 
    create_shippingAddress_telephone: null,
    create_shippingAddress_addressUser: null,
    create_shippingAddress_subdistrictUser: null,
    create_shippingAddress_districtUser: null,
    create_shippingAddress_provinceUser: null,
    create_shippingAddress_zipcodeUser: null,
    create_shippingAddress_InvoicePerson: null,
    create_shippingAddress_InvoiceTaxpayerName: null,
    create_shippingAddress_InvoiceTaxIdentificationNumber: null,
    create_shippingAddress_InvoiceTelephone: null,
    create_shippingAddress_useShippingAddress: null,
    create_shippingAddress_InvoiceAddressUser: null,
    create_shippingAddress_InvoiceSubdistrict: null,
    create_shippingAddress_InvoiceDistrict: null,
    create_shippingAddress_InvoiceProvince: null,
    create_shippingAddress_InvoiceZipcode : null,
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.CLEAR_PROGRAM:
      return INIT_STATE;
    case types.CREATE_SHIPPINGADDRESS:
      return {
        ...state,
        create_shippingAddress_taxInvoice: action.payload.taxInvoice, 
        create_shippingAddress_username: action.payload.username, 
        create_shippingAddress_lastname: action.payload.lastname, 
        create_shippingAddress_telephone: action.payload.telephone,
        create_shippingAddress_addressUser: action.payload.addressUser,
        create_shippingAddress_subdistrictUser: action.payload.subdistrictUser,
        create_shippingAddress_districtUser: action.payload.districtUser,
        create_shippingAddress_provinceUser: action.payload.provinceUser,
        create_shippingAddress_zipcodeUser: action.payload.zipcodeUser,
        create_shippingAddress_InvoicePerson: action.payload.InvoicePerson,
        create_shippingAddress_InvoiceTaxpayerName: action.payload.InvoiceTaxpayerName,
        create_shippingAddress_InvoiceTaxIdentificationNumber: action.payload.InvoiceTaxIdentificationNumber,
        create_shippingAddress_InvoiceTelephone: action.payload.InvoiceTelephone,
        create_shippingAddress_useShippingAddress: action.payload.useShippingAddress,
        create_shippingAddress_InvoiceAddressUser: action.payload.InvoiceAddressUser,
        create_shippingAddress_InvoiceSubdistrict: action.payload.InvoiceSubdistrict,
        create_shippingAddress_InvoiceDistrict: action.payload.InvoiceDistrict,
        create_shippingAddress_InvoiceProvince: action.payload.InvoiceProvince,
        create_shippingAddress_InvoiceZipcode : action.payload.InvoiceZipcode,
      };
    default:
      return { ...state };
  }
}