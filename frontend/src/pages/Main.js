import React, { useState, useEffect } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import appBar from '../components/appBar';

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
            <appBar/>
        </div>
        
    );

}

export default Main;