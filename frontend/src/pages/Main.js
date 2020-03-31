import React, { useState, useEffect } from 'react';

Main = () => {

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
        <div style={{ width: '100%', height: '100vh' }}>
            Main page
        </div>
    );

}

export default Main;