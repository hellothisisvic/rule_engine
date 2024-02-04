import * as React from "react";
import {BuildType} from "../../models/build_type";
import {Divider, List, ListItem, ListItemText} from "@mui/material";
import {useEvaluator} from "../../contexts/evaluator";
import {FactState} from "../../models/fact_state";

function EvaluatorResult() {
    const evaluator: FactState = useEvaluator();
    let hideElement: boolean = true;
    if (evaluator.result.length !== 0) {
        hideElement = false;
    }
    return (
        <div hidden={hideElement}>
            <Divider></Divider>
            <h2 className={"headline"}>Analysis results</h2>
            <h3 className={"second-headline"}>Based on these property facts, the allowed building types are:</h3>
            <div className={"content"}>
                <List sx={{listStyleType: 'disc', width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                    {evaluator.result.map((type: BuildType) => (
                        <ListItem key={type} sx={{display: 'list-item'}}>
                            <ListItemText primary={`${type}`}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
}

export default EvaluatorResult;