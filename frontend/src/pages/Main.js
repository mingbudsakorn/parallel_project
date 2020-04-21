import React, { useState, useEffect } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Bar from '../components/Bar';
import Group from '../components/Group';
import { Button, Grid, Link } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import ChatBox from '../components/ChatBox'

const Main = () => {

    const [isJoin, setIsJoin] = useState([])
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])
    const [lastMessage, setLastMessage] = useState({})
    const [unread, setUnread] = useState({})
    const [groupList, setGroupList] = useState([])
    const [joinedGroups, setJoinedGroups] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [newGroupName, setNewGroupName] = useState('')
    const [selectedGroupID, setSelectedGroupID] = useState('')
    const [selectGroupName, setSelectGroupName] = useState('')
    const [messageOrder, setMessageOrder] = useState(-1)

    // TODO
    // useEffect() {}

    return (
        <div>
            <Bar/>
            <Grid container spacing={0}>
                <Grid xs={4}>
                    <Container style={{backgroundColor:'#424141'}}>
                        <Typography variant="h5" style={{color:'white', marginBottom:10}}>
                            GROUPS
                        </Typography>
                        
                        <Group/>
                    </Container>
                </Grid>
                <Grid xs={8}>
                    <Container style={{backgroundColor:'grey'}}>
                        <Typography variant="h5" style={{color:'white', marginBottom:10}}>
                            GROUP1
                        </Typography>
                        <ChatBox/>
                    </Container>
                </Grid>
            </Grid>
        </div>
        
    );

}

export default Main;