// import React, { useState, useRef, useEffect } from "react";
// import styled from "styled-components";
// import { View, Dimensions } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { EvilIcons } from "@expo/vector-icons";
// import {
//   Card,
//   CardItem,
//   Text,
//   Button,
//   Icon,
//   Body,
//   DeckSwiper
// } from "native-base";
// import { Video } from "expo-av";

// const cards = [
//   {
//     description: "Add Ice Depth",
//     video: require("../assets/iceDepthVid.mp4")
//   },
//   {
//     description: "Add Lake Messages / Alerts",
//     video: require("../assets/alertVid.mp4")
//   },
//   {
//     description: "Add Lake Water Temperatures",
//     video: require("../assets/waterTempVid.mp4")
//   }
// ];
// function Onboarding(props) {
//   const [_deckSwiper, setDeckSwiper] = useState();

//   return (
//     <Container>
//       <Image source={require("../assets/overcastDark.png")} />

//       <Title style={{}}>New Features</Title>
//       <DeckSwiper
//         style={{}}
//         dataSource={cards}
//         ref={c => setDeckSwiper(c)}
//         renderItem={item => (
//           <VideoDiv>
//             <Video
//               source={item.video}
//               rate={1.0}
//               volume={1.0}
//               isMuted={false}
//               resizeMode="cover"
//               shouldPlay
//               isLooping
//               style={{
//                 width: "60%",
//                 height: 500,
//                 marginRight: "auto",
//                 marginLeft: "auto",
//                 marginTop: "15%",
//                 borderRadius: 15
//               }}
//             />
//             <TitleOne>{item.description}</TitleOne>
//           </VideoDiv>
//         )}
//       />
//       <View
//         style={{
//           flexDirection: "row",
//           flex: 1,
//           position: "absolute",
//           bottom: "13%",
//           left: 0,
//           right: 0,
//           justifyContent: "space-evenly",
//           paddingLeft: 15,
//           paddingRight: 15
//         }}
//       >
//         <Button
//           style={{ marginRight: "10%" }}
//           iconLeft
//           info
//           onPress={() => _deckSwiper._root.swipeLeft()}
//         >
//           <Text> Back</Text>
//         </Button>

//         <Button info iconRight onPress={() => _deckSwiper._root.swipeRight()}>
//           <Text> Next</Text>
//         </Button>
//       </View>
//     </Container>
//   );
// }

// const Container = styled.View`
//   background: white;
//   width: 100%;
//   height: 100%;
//   margin: 2px 2px;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
// `;
// const VideoDiv = styled.View``;

// const Content = styled.View`
//   display: flex;
// `;
// //Background Image

// const InsideTopDiv = styled.View`
//   margin-top: 18%;
//   width: 85%;
//   margin-right: auto;
//   margin-left: auto;
// `;
// const Image = styled.Image`
//   width: 100%;
//   height: 14%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   border-bottom-left-radius: 25px;
//   border-bottom-right-radius: 25px;
// `;

// const HeaderCardTXT = styled.Text`
//   color: black;
//   font-size: 25px;
//   font-weight: bold;
//   padding-bottom: 2%;
// `;
// //Container Information Start
// const HeaderCard = styled.View`
//   border-radius: 15px;
//   background-color: rgba(255, 255, 255, 0.35);
// `;
// const HeaderCardContent = styled.View`
//   padding: 2px 16px;
//   background-color: white;
//   border-radius: 15px;
//   height: 50%;
// `;
// const Header = styled.View`
//   padding: 2px 16px;
//   border-top-right-radius: 15px;
//   border-top-left-radius: 15px;
//   padding: 5%;
//   background-color: rgba(255, 255, 255, 0.2);
// `;
// const Title = styled.Text`
//   color: white;
//   font-size: 30px;
//   padding-top: 14%;
//   padding-left: 5%;
//   font-family: "MontserratSemiBold";
// `;

// const TitleOne = styled.Text`
//   text-align: center;
//   padding-top: 10%;
//   color: black;
//   font-size: 26;
//   font-family: "MontserratSemiBold";
// `;
// export default Onboarding;
