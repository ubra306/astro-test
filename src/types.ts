export interface Root {
  overview: Overview
  additionalInfo: AdditionalInfo
  dealerDetail: DealerDetail
  equipment: Equipment
  technicalData: TechnicalData
  incentives: any[]
  campaigns: Campaigns
  videos: any[]
  financeOptions: FinanceOptions
  breadcrumbs: Breadcrumb[]
  seoMetaData: SeoMetaData
}

export interface Overview {
  id: Id
  crossId: any
  header: string
  subHeader: string
  powerKw: number
  powerPs: number
  maxNetPowerElectricKw: any
  maxNetPowerElectricPs: any
  initialRegistrationDate: string
  mileage: number
  price: number
  entrepreneurPrice: any
  priceOfferOfTheWeek: any
  netSalesPrice: number
  newSalesListPrice: any
  imageUrls: string[]
  threeSixtyExteriorBaseURL: any
  threeSixtyInteriorBaseURL: any
  financeable: boolean
  vehicleLocation: VehicleLocation
  dealerRatings: number
  dealerRatingAverage: number
  dealerPhoneNumber: string
  dealerCallTrackingNumber: string
  fleetVehicle: boolean
  dealerRatingUrl: string
  reserved: boolean
  reservable: boolean
  inputTaxType: any
  brand: string
  makeCode: string
  model: string
  carHubId: string
  powerKwHybrid: any
  powerPsHybrid: any
  powerKw30min: any
  powerPs30min: any
  powerKwCombustionEngine: number
  powerPsCombustionEngine: number
  future: boolean
  pbsVehicle: boolean
}

export interface Id {
  dealerId: string
  vehicleId: string
  dealerIdNumber: number
  vehicleIdNumber: number
  fiveDigitsDealerId: string
  fiveDigitsVehicleId: string
}

export interface VehicleLocation {
  name: string
  street: string
  postalCode: string
  city: string
}

export interface AdditionalInfo {
  text: string
}

export interface DealerDetail {
  vehicleLocation: VehicleLocation2
  dealerRatings: number
  dealerRatingAverage: number
  openingTimes: string | undefined[]
  websiteUrl: string
  employees: Employee[]
  dealerRatingUrl: string
}

export interface VehicleLocation2 {
  name: string
  street: string
  postalCode: string
  city: string
}

export interface Employee {
  id: number
  fullname: string
  telephoneNumber: string
  mobileNumber?: string
  imageUrl: string
  jobDescription: string
}

export interface Equipment {
  standard: any[]
  extra: any[]
  used: Used[]
  modelCode: string
}

export interface Used {
  code: string
  text: string
}

export interface TechnicalData {
  id: Id2
  colorText: string
  initialRegistrationDate: string
  mileage: number
  powerKw: number
  powerPs: number
  maxNetPowerElectricPs: any
  maxNetPowerElectricKw: any
  fuelText: string
  combinedConsumption: number
  consumptionUnitCode: string
  co2Emission: number
  emissionClassText: string
  driveText: string
  doors: number
  seats: number
  previousOwners: number
  motorCapacity: number
  bodyText: string
  weightGross: number
  weightNet: number
  gearTypeText: string
  wltp: boolean
  vin: string
  electricDisclaimer: any
  electricDisclaimerSkoda: any
  nextTechnicalInspection: any
  condition: any
  serviceBook: any
  initialRegistrationCountry: any
  cebiaReportResult: any
  cebiaUrl: any
  ecoTax: any
  numberOfAirbags: any
  entryDate: any
  electricRange: any
  powerKwHybrid: any
  powerPsHybrid: any
  powerKw30min: any
  powerPs30min: any
  powerKwCombustionEngine: number
  powerPsCombustionEngine: number
  warrantyPeriodInMonth: any
}

export interface Id2 {
  dealerId: string
  vehicleId: string
  dealerIdNumber: number
  vehicleIdNumber: number
  fiveDigitsDealerId: string
  fiveDigitsVehicleId: string
}

export interface Campaigns {
  campaigns: Campaign[]
  discountCalculation: DiscountCalculation
}

export interface Campaign {
  discount: number
  title: string
  text: string
  disclaimer: any
  detailUrl: string
  campaignKey: string
}

export interface DiscountCalculation {
  minimalPrice: number
  basePrice: number
  totalDiscount: number
  discountItems: any[]
  noDiscountItems: NoDiscountItem[]
}

export interface NoDiscountItem {
  title: string
  campaignKey: string
}

export interface FinanceOptions {
  leasingRate: any
  creditRate: any
}

export interface Breadcrumb {
  label: string
  path: string
  type: string
}

export interface SeoMetaData {
  title: string
  description: string
  robots: string
  canonicalLink: string
  image: string
}
