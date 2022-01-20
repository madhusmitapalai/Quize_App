import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './result.scss'
const Result = ({name,Score}) => {
    const history=useHistory()
    useEffect(()=>{
        if(!name){
            history.push('/')
        }
    },[name,history])
    return (
        <>
            <div className='result containers'>
                <span className='title'> final score : {Score}</span>
                <span className='titles'> {name}</span>
                <Button  size="large" variant="contained" color="secondary" style={{width:195}}>go to homepage </Button>
            </div>
        </>
    )
}

export default Result
