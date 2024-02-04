import {Context, createContext, Dispatch, FC, ReactNode, useContext, useReducer} from 'react';
import evaluator from "../reducers/evaluator";
import {Zone} from "../models/zone";
import {FactState} from "../models/fact_state";
import {EvaluatorAction, SubmitFacts} from "../actions/evaluator_action";

const initialFacts: FactState = {
    zone: Zone.Zone_1,
    size: 0,
    flood_area: false,
    result: []
}

interface EvaluatorProviderProps {
    children: ReactNode;
}

export const EvaluatorContext: Context<FactState> =
    createContext<FactState>({} as FactState);
export const EvaluatorDispatchContext: Context<Dispatch<SubmitFacts>> =
    createContext<Dispatch<EvaluatorAction>>(() => null);

export const EvaluatorProvider: FC<EvaluatorProviderProps> =
    ({children}) => {

        const [factState, dispatch] =
            useReducer(evaluator, initialFacts);

        return (
            <EvaluatorContext.Provider value={factState}>
                <EvaluatorDispatchContext.Provider value={dispatch}>
                    {children}
                </EvaluatorDispatchContext.Provider>
            </EvaluatorContext.Provider>
        );
    };

export function useEvaluator(): FactState {
    return useContext(EvaluatorContext);
}

export function useEvaluatorDispatch(): Dispatch<SubmitFacts> {
    return useContext(EvaluatorDispatchContext);
}
