import React from 'react';
import './App.css';
import EvaluatorResult from "./components/Result/evaluator_result";
import EvaluatorInput from "./components/Input/evaluator_input";
import {Box, Paper} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import {EvaluatorProvider} from "./contexts/evaluator";

function App() {
    return (
        <div className="evaluator">
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={5}>
                    <Grid xs></Grid>
                    <Grid xs={6}>
                        <Paper>
                            <div className='grid-elements item'>
                                <EvaluatorProvider>
                                    <EvaluatorInput></EvaluatorInput>
                                    <EvaluatorResult></EvaluatorResult>
                                </EvaluatorProvider>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid xs></Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default App;
