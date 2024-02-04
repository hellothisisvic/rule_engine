import {FactState} from "../models/fact_state";
import {EvaluatorAction} from "../actions/evaluator_action";
import {SUBMIT_FACTS} from "../constants/evaluator_status";
import {applyRulesOnFacts} from "../service/rule_engine";

export default function evaluator(state: FactState, action: EvaluatorAction): FactState {
    switch (action.type) {
        case SUBMIT_FACTS:
            state ={
                ...state,
                size: action.factState.size,
                zone: action.factState.zone,
                flood_area: action.factState.flood_area,
                result: applyRulesOnFacts(action.factState)
            };
            return state;
        default:
            return state;
    }
}
