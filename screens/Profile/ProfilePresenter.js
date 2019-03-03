import React from "react"
import { TouchableOpacity, Switch } from "react-native"
import styled from "styled-components"
import Colors from "../../constants/Colors"

const Container = styled.View`
    flex: 1;
    padding-top: 20px;
    padding-bottom: 20px;
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

const Right = styled.View``

const ProfileName = styled.Text`
    font-size: 25px;
`

const Email = styled.Text`
    color: ${Colors.supportColor};
`

const Logout = styled.Text`
    font-size: 13px;
    color: #8c8c8c;
`

const ListContainer = styled.View``

const ListItem = styled.View`
    padding: 20px;
    flex-direction: row;
    justify-content: space-between;
`

const ListText = styled.Text`
    font-size: 18px;
    color: #8c8c8c;
`

const ProfilePresenter = ({ profile, logout }) => {
    return (
        <Container>
            <PContainer>
                <Profile>
                    <ProfilePhoto
                        source={
                            profile.thumbnail
                                ? { uri: profile.thumbnail }
                                : require("../../assets/images/default_profile.jpg")
                        }
                    />
                    <Right>
                        <ProfileName>{profile.displayName}</ProfileName>
                        <Email>{profile.email}</Email>
                    </Right>
                </Profile>
                <TouchableOpacity onPress={logout}>
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
                <TouchableOpacity>
                    <ListItem>
                        <ListText>문의하기</ListText>
                    </ListItem>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ListItem>
                        <ListText>이용약관</ListText>
                    </ListItem>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ListItem>
                        <ListText>개인정보처리방침</ListText>
                    </ListItem>
                </TouchableOpacity>
            </ListContainer>
        </Container>
    )
}

export default ProfilePresenter
