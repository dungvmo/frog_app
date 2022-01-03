import { useState } from "react";

import { Button } from "@material-ui/core";
import { Input, TextareaAutosize } from '@mui/material';

import axiosInstance from '../../axios';

function Home () {
    const [data, setData] = useState({
        riverWidth: 0,
        leavesPosition: ''
    })

    const [result, setResult] = useState({
        array: '',
        message: ''
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        axiosInstance.post('/', {
            riverWidth: data.riverWidth,
            leavesPosition: data.leavesPosition
        }).then((res) => {
            setResult({
                array: res.data.array,
                message: res.data.message
            })
        })
    }

    return (
        localStorage.getItem('access_token') ? (
            <>
                <h1> welcome to frog application!!</h1>
                <div className="">
                    <label for="river_width"> Input River's width:  </label>
                    <Input 
                        id="river_width"
                        variant="standard" 
                        name='riverWidth'
                        type="number"
                        onChange={handleChange}
                        value={data.riverWidth}
                        required
                    />
                    <br/>
                    <br/>
                    <label for="leaves_postion"> Input position of falling leaves:  </label>
                    <TextareaAutosize 
                        id="leaves_postion"
                        value={data.leavesPosition}
                        name="leavesPosition"
                        minRows={5}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                        required
                    />
                </div>
                <Button onClick={handleSubmit}> Check result </Button>
                {result.message ? (
                    <>
                        <h2>Array: {result.array}</h2>
                        <h2>Message: {result.message}</h2>
                    </>
                ): ''}
            </>
        ): (
            <>
            <h1>You are not logged in</h1>
                <Button href="/login">
                    Go to login
                </Button>
                <p>Or create account if you dont have one</p>
                <Button href="/register">
                    Go to register
                </Button>
            </>
        ) 
    )
}

export default Home;