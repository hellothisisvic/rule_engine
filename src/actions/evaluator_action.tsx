import * as constants from '../constants/evaluator_status';
import {FactState} from "../models/fact_state";

export interface SubmitFacts {
    type: constants.SUBMIT_FACTS;
    factState: FactState;
}

export type EvaluatorAction = SubmitFacts;

export function submitFacts(factState: FactState): SubmitFacts {
    return {
        type: constants.SUBMIT_FACTS,
        factState: factState
    };
}
