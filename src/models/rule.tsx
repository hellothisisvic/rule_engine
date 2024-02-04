import {Zone} from "./zone";
import {BuildType} from "./build_type";

export interface Rule {
    zone: Zone;
    size_bottom: number;
    size_operator: string;
    flood_area: boolean;
    type: BuildType;
}