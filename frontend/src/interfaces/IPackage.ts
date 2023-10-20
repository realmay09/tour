import { PromotionInterface } from "./IPromotion";
import { AdminInterface } from "./IAdmin";

export interface PackageInterface {
    ID?: number; 
    Name?: string;
    Detail?: string;
    Priceadult?: number;
    Pricechil?: number;
    Highlights?: string;

    AdminID?: AdminInterface;

    PromotionID?: PromotionInterface;

}