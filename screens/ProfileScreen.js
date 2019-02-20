import React from "react"
import { TouchableOpacity, Switch } from "react-native"
import styled from "styled-components"
import Colors from "../constants/Colors"

const Container = styled.View`
    flex: 1;
    padding-top: 15px;
    padding-bottom: 15px;
    background: #fff;
`

const PContainer = styled.View`
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40;
`

const Profile = styled.View`
    flex-direction: row;
    align-items: center;
`

const ProfilePhoto = styled.Image`
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border-radius: 50;
`

const ProfileName = styled.Text`
    font-size: 25px;
`

const Logout = styled.Text`
    font-size: 13px;
    color: #8c8c8c;
`

const ListContainer = styled.View``

const ListItem = styled.View`
    padding: 20px;
    border-bottom-width: 0.5;
    border-bottom-color: #ccc;
    flex-direction: row;
    justify-content: space-between;
`

const ListText = styled.Text`
    font-size: 18px;
    color: #8c8c8c;
`

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: "프로필"
    }

    render() {
        /* Go ahead and delete ExpoConfigView and replace it with your
         * content, we just wanted to give you a quick view of your config */
        return (
            <Container>
                <PContainer>
                    <Profile>
                        <ProfilePhoto
                            source={{
                                uri:
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk18ZzM-evPmprGM08m8twHoG89ZQSDyu7kUCpDIfIayowlz2QSA"
                            }}
                        />
                        <ProfileName>js John</ProfileName>
                    </Profile>
                    <TouchableOpacity>
                        <Logout>로그아웃</Logout>
                    </TouchableOpacity>
                </PContainer>
                <ListContainer>
                    <ListItem>
                        <ListText>푸쉬알림</ListText>
                        <Switch
                            thumbColor="#fff"
                            trackColor={{
                                true: Colors.mainColor,
                                false: "#ccc"
                            }}
                            value={true}
                        />
                    </ListItem>
                    <ListItem>
                        <TouchableOpacity>
                            <ListText>문의하기</ListText>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                        <TouchableOpacity>
                            <ListText>이용약관</ListText>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                        <TouchableOpacity>
                            <ListText>개인정보처리방침</ListText>
                        </TouchableOpacity>
                    </ListItem>
                </ListContainer>
            </Container>
        )
    }
}
