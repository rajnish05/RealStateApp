import { HomeDescriptionProps } from "../screen/appScreen/details/interface";
import { Home } from "../utils/Home";

export interface DataContextProps {
    data: Home[]
    setData?: any;
    homeDetail: HomeDescriptionProps | any;
    setHomeDetail?: any;
  }