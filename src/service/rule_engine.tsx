import {FactState} from "../models/fact_state";
import {BuildType} from "../models/build_type";
import {Zone} from "../models/zone";
import {Rule} from "../models/rule";

export function applyRulesOnFacts(fact: FactState): Array<BuildType> {
    let rules: Array<Rule> = getRuleArray();
    let result: Array<BuildType> = new Array<BuildType>();

    rules.forEach(function (rule: Rule): void {
        let value: boolean =
            rule.zone === fact.zone
            && ((rule.size_operator === "gt" && fact.size > rule.size_bottom)
                || (rule.size_operator === "ge" && fact.size >= rule.size_bottom))
            && !fact.flood_area;
        if (value) {
            result.push(rule.type);
        }
    });
    if (result.length === 0) {
        result.push(BuildType.Type_4);
    }
    return result;
}

function getRuleArray(): Array<Rule> {
    return [
        {zone: Zone.Zone_1, size_bottom: 0, size_operator: "gt", type: BuildType.Type_1, flood_area: false},
        {zone: Zone.Zone_2, size_bottom: 0, size_operator: "gt", type: BuildType.Type_1, flood_area: false},
        {zone: Zone.Zone_2, size_bottom: 500, size_operator: "ge", type: BuildType.Type_2, flood_area: false},
        {zone: Zone.Zone_3, size_bottom: 500, size_operator: "ge", type: BuildType.Type_2, flood_area: false},
        {zone: Zone.Zone_3, size_bottom: 1000, size_operator: "gt", type: BuildType.Type_3, flood_area: false},
    ];

}