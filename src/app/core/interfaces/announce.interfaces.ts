export interface ApiResponse<T> {
  status: string;
  message: string;
  data: { page: T };
}
export interface AnnounceDTO {
  title: string;
  description: string;
  price: number;
  publisherId: number;
  information: InformationDTO;
  tagIds: number[];
  featureIds: number[];
  imageIds: number[];
  locationId: number;
  subCategoryId: number;
  categoryId: number;
}
export interface InformationDTO {
  phone: string;
  visiblePhone: boolean;
  numChambers: number;
  numSalons: number;
  numBain: number;
  numCuisine: number;
  floor: number;
  livingSurface: number;
  totalSurface: number;
  propertyAge: number;
  syndicFees: number;
  cleaningFees: number;
}
export class CAnnounce {
  title: string;
  description: string;
  price: number;
  publisherId: number;
  information: InformationDTO;
  tagIds: number[];
  featureIds: number[];
  locationId: number;
  subCategoryId: number;
  categoryId: number;

  constructor(
    title: string,
    description: string,
    price: number,
    publisherId: number,
    information: InformationDTO,
    tagIds: number[],
    featureIds: number[],
    locationId: number,
    subCategoryId: number,
    categoryId: number
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.publisherId = publisherId;
    this.information = information;
    this.tagIds = tagIds;
    this.featureIds = featureIds;
    this.locationId = locationId;
    this.subCategoryId = subCategoryId;
    this.categoryId = categoryId;
  }
}

export class CInformation {
  phone: string;
  visiblePhone: boolean;
  numChambers: number;
  numSalons: number;
  numBain: number;
  numCuisine: number;
  floor: number;
  livingSurface: number;
  totalSurface: number;
  propertyAge: number;
  syndicFees: number;
  cleaningFees: number;

  constructor(
    phone: string,
    visiblePhone: boolean,
    numChambers: number,
    numSalons: number,
    numBain: number,
    numCuisine: number,
    floor: number,
    livingSurface: number,
    totalSurface: number,
    propertyAge: number,
    syndicFees: number,
    cleaningFees: number
  ) {
    this.phone = phone;
    this.visiblePhone = visiblePhone;
    this.numChambers = numChambers;
    this.numSalons = numSalons;
    this.numBain = numBain;
    this.numCuisine = numCuisine;
    this.floor = floor;
    this.livingSurface = livingSurface;
    this.totalSurface = totalSurface;
    this.propertyAge = propertyAge;
    this.syndicFees = syndicFees;
    this.cleaningFees = cleaningFees;
  }
}


