import {Zone} from "./zone";
import {BuildType} from "./build_type";

export interface FactState {
    zone: Zone;
    size: number;
    flood_area: boolean;
    result: Array<BuildType>;
}