import {Button, InputAdornment, TextField} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import * as React from "react";
import {Zone} from "../../models/zone";
import {Yn} from "../../models/yn";
import {SUBMIT_FACTS} from "../../constants/evaluator_status";
import {useEvaluatorDispatch} from "../../contexts/evaluator";
import {FactState} from "../../models/fact_state";
import {SubmitFacts} from "../../actions/evaluator_action";

const zones: Array<Zone> = [Zone.Zone_1, Zone.Zone_2, Zone.Zone_3]

const state: FactState = {
    zone: Zone.Zone_1,
    size: 0,
    flood_area: false,
    result: []
};

function EvaluatorInput() {
    const dispatch: React.Dispatch<SubmitFacts> = useEvaluatorDispatch();

    function handleSubmitFacts(): void {
        dispatch({
            type: SUBMIT_FACTS,
            factState: state
        });
    }

    function handleChangeSize(sizeString: string): void {
        state.size = parseInt(sizeString);
    }

    function handleChangeZone(zoneString: string): void {
        zoneString = zoneString.replace(" ", "_");
        state.zone = Zone[zoneString as keyof typeof Zone];
    }

    function handleChangeFloodArea(ynString: string): void {
        const yn: string = ynString as keyof typeof Yn;
        state.flood_area = yn !== Yn.No.toString();
    }

    function convertToYn(boolValue: boolean): Yn {
        return boolValue ? Yn.Yes : Yn.No;
    }

    return (
        <div>
            <h2 className={"headline"}>Property Facts</h2>
            <Grid container spacing={4} xs={12}>
                <Grid xs={4}>
                    <TextField
                        required
                        id="zone-selector"
                        sx={{m: 1}}
                        select
                        label="Zone"
                        defaultValue={state.valueOf()}
                        SelectProps={{
                            native: true,
                        }}
                        fullWidth
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                            handleChangeZone(event.target.value);
                        }}
                    >
                        {zones.map((option: Zone) => (
                            <option key={option.valueOf()} value={option.valueOf()}>
                                {option.valueOf()}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid xs={4}>
                    <TextField
                        required
                        label="Size"
                        id="size-text"
                        sx={{m: 1}}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">sqm</InputAdornment>,
                        }}
                        defaultValue={state.size}
                        fullWidth
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                            handleChangeSize(event.target.value);
                        }}
                    />
                </Grid>
                <Grid xs={4}>
                    <TextField
                        required
                        id="flood-selector"
                        sx={{m: 1}}
                        select
                        label="In flooding area"
                        defaultValue={convertToYn(state.flood_area)}
                        SelectProps={{
                            native: true,
                        }}
                        fullWidth
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                            handleChangeFloodArea(event.target.value);
                        }}
                    >
                        <option key={"Yes"} value={Yn.Yes}>
                            {"Yes"}
                        </option>
                        <option key={"No"} value={Yn.No}>
                            {"No"}
                        </option>
                    </TextField>
                </Grid>
                <Grid xs={1}>
                    <Button variant="contained" onClick={handleSubmitFacts}>Submit</Button>
                </Grid>
                <Grid xs={11}></Grid>
                <Grid xs={12}></Grid>
            </Grid>
        </div>
    );
}

export default EvaluatorInput;