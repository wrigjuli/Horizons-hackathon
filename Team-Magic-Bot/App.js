import React from 'react';

import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from 'react-native-button';


// import RNShakeEvent from 'react-native-shake';

class App extends React.Component {

  static navigationOptions = (props) => ({

  })
  constructor(props){
    super(props);
    this.state = {
      // display: [],
      // easy: ['cure cancer', 'make pens', 'reusable water', 'i ran out of ideas', 'this is easy'],
      // nouns: ['Cecilia', 'Harman', 'Julie', 'Nature', 'Garden'],
      // verbs: ['code', 'jump', 'think', 'laugh', 'kick']

    }
  }

  //  componentWillMount(){
  //    RNShakeEvent.addEventListener('shake', () => {
  //      console.log('Device Shake! Julie, Harman, Cecilia');
  //    })
  //  }
  //
  //  componentWillUnmount() {
  //   RNShakeEvent.removeEventListener('shake');
  // }


  // ourPrediction(){
  //   var noun = this.state.nouns;
  //   var verb = this.state.verbs;
  //   var var1 = noun[Math.floor(Math.random() * noun.length)];
  //   var var2 = verb[Math.floor(Math.random() * verb.length)];
  //
  //
  //     this.setState({display: [var1, var2]});
  //
  // }

  render() {
    //console.log("Something");
    return (
      <View style={styles.container}>

        <View style={styles.backgroundContainer}>

          <ImageBackground

            source={{uri: 'https://thumbs.gfycat.com/JointYoungFattaileddunnart-max-1mb.gif' }} resizeMode='cover' style={styles.backdrop}> </ImageBackground>
          </View>
          <Text style={styles.titleContainer}>magic-bot</Text>
          <View styles={styles.overLay}>


            <Image
              source={require('./assets/ball-backijjj.png') } style={styles.logo}/>
              </View>
              <View styles={styles.backdrop}>
              <Button
                 containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'purple'}}
                 disabledContainerStyle={{backgroundColor: 'grey'}}
                 style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
                 onPress={()=> this.props.navigation.navigate('Page2')}>
                 Child's Play!
               </Button>
              <Button
                containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'pink'}}
                disabledContainerStyle={{backgroundColor: 'grey'}}
                style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
                onPress={()=> this.props.navigation.navigate('Page3')}>
                Sweet Spot
              </Button>
              <Button
                containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
                disabledContainerStyle={{backgroundColor: 'grey'}}
                style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
                onPress={()=> this.props.navigation.navigate('Page4')}>
                Chaos
              </Button>
            </View>

          </View>
        );
      }
    }

    class Easy extends React.Component {
      constructor(props){
        super(props);
        this.state = {
          display: [],
          easy: ["Cure cancer"],

        }


      }
      static navigationOptions = (props) => ({
        // title: 'Easy',
        //headerLeft: <TouchableOpacity onPress={() => props.navigation.navigate('Page1')}><Text style={styles.niceFont}>Back</Text></TouchableOpacity>,

      })

      ourPrediction(){
        var easy = this.state.easy;

        var var2 = easy[Math.floor(Math.random() * easy.length)];


        this.setState({display: [var2]});
      }

      render() {
        return (
        //   <View style={styles.container}>
        //   <View style={styles.container}>
        //     {this.state.display.map(word => (
        //       <Text>{word}  </Text>
        //     )
        //   )}
        //   {/* <Button color='white' onPress={()=> this.ourPrediction()} title="Shake it!"/> */}
        // //
        // //   <Button
        //     containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
        //     disabledContainerStyle={{backgroundColor: 'grey'}}
        //     style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
        //     onPress={()=> this.ourPrediction()}>
        //     Shake it!
        //   </Button>
        //
        //
        // </View>

        <View style={styles.container}>


          <View style={styles.backgroundContainer}>

            <ImageBackground

              source={{uri: 'https://thumbs.gfycat.com/JointYoungFattaileddunnart-max-1mb.gif' }} resizeMode='cover' style={styles.backdrop}> </ImageBackground>
          </View>
            <Text style={styles.titleContainer}>magic-bot</Text>
            {/* {this.state.display.map(word => (
              <Text style={{color: 'white'}}>{word}  </Text>
            )
          )} */}
            <View>

              {this.state.display.map(word => (
                <View style={{ position: 'absolute', zIndex: '4000', top:130, paddingLeft: 105}}><Text style={styles.ourText}>{word}  </Text></View>
              )
            )}
              <View><Image
                source={require('./assets/ball-backijjj.png') } style={styles.logo}></Image></View>
                {/* <View style={styles.overLay}>

                </View> */}
                </View>

                <View styles={{flex: 1, justifyContent:'space-between'}}>

                  <Button
                      containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
                      disabledContainerStyle={{backgroundColor: 'grey'}}
                      style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
                      onPress={()=> this.ourPrediction()}>
                      Shake it!
                    </Button>
                    <Button
                        containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
                        disabledContainerStyle={{backgroundColor: 'grey'}}
                        style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
                        onPress={()=> this.props.navigation.navigate('Page1')}>
                        Home
                      </Button>
              </View>

            </View>

      );
    }
  }


  class Medium extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        display: [],
        nouns: [
          "food", "car", "clowns", "fuel", "backpacks"
        ],
        verbs: ["Renew", "Electric", "Deliver", "Collect"]

      }
    }
    static navigationOptions = (props) => ({
      // title: 'Medium',
      // headerLeft: <TouchableOpacity onPress={() => props.navigation.navigate('Page1')}><Text style={styles.niceFont}>Back</Text></TouchableOpacity>,
    })

    ourPrediction(){
      var noun = this.state.nouns;
      var verb = this.state.verbs;
      var var1 = noun[Math.floor(Math.random() * noun.length)];
      var var2 = verb[Math.floor(Math.random() * verb.length)];


      this.setState({display: [var2, var1]});
    }


    render() {
      return (
      //   <View style={styles.container}>
      //     {this.state.display.map(word => (
      //       // <Text style={{fontFamily: 'AmericanTypewriter-CondensedBold' }>{word} </Text>
      //       <Text> {word} </Text>
      //     )
      //   )}
        // <Button
        //   containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
        //   disabledContainerStyle={{backgroundColor: 'grey'}}
        //   style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
        //   onPress={()=> this.ourPrediction()}>
        //   Shake it!
        // </Button>
      //
      //
      // </View>


      // <View style={styles.container}>
      //
      //   <View style={styles.backgroundContainer}>
      //
      //     <ImageBackground
      //
      //       source={{uri: 'https://thumbs.gfycat.com/JointYoungFattaileddunnart-max-1mb.gif' }} resizeMode='cover' style={styles.backdrop}> </ImageBackground>
      //     </View>
      //     <Text style={styles.titleContainer}>magic-bot</Text>
      //     <View styles={styles.overLay}>
      //
      //
      //       <Image
      //         source={require('./assets/ball-backijjj.png') } style={styles.logo}/>
      //         </View>
      //         <View styles={styles.backdrop}>
      //         {/* <Button
      //            containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'purple'}}
      //            disabledContainerStyle={{backgroundColor: 'grey'}}
      //            style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
      //            onPress={()=> this.props.navigation.navigate('Page2')}>
      //            easy peasy!
      //          </Button>
      //         <Button
      //           containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'pink'}}
      //           disabledContainerStyle={{backgroundColor: 'grey'}}
      //           style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
      //           onPress={()=> this.props.navigation.navigate('Page3')}>
      //           so random!
      //         </Button>
      //         <Button
      //           containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
      //           disabledContainerStyle={{backgroundColor: 'grey'}}
      //           style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
      //           onPress={()=> this.props.navigation.navigate('Page4')}>
      //           chaos!
      //         </Button> */}
      //         <Button
      //           containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
      //           disabledContainerStyle={{backgroundColor: 'grey'}}
      //           style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
      //           onPress={()=> this.ourPrediction()}>
      //           Shake it!
      //         </Button>
      //         <Button
      //             containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
      //             disabledContainerStyle={{backgroundColor: 'grey'}}
      //             style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
      //             onPress={()=> this.props.navigation.navigate('Page1')}>
      //             Back
      //           </Button>
      //       </View>
      //
      //     </View>

      <View style={styles.container}>


        <View style={styles.backgroundContainer}>

          <ImageBackground

            source={{uri: 'https://thumbs.gfycat.com/JointYoungFattaileddunnart-max-1mb.gif' }} resizeMode='cover' style={styles.backdrop}> </ImageBackground>
        </View>
          <Text style={styles.titleContainer}>magic-bot</Text>
          {/* {this.state.display.map(word => (
            <Text style={{color: 'white'}}>{word}  </Text>
          )
        )} */}
          <View>

            {this.state.display.map(word => (
              <View style={{  zIndex: '4000', top:160}}><Text style={styles.ourText}>{word}  </Text></View>
            )
          )}
            <View><Image
              source={require('./assets/ball-backijjj.png') } style={styles.logo}></Image></View>
              {/* <View style={styles.overLay}>

              </View> */}
              </View>

              <View styles={{flex: 1, justifyContent:'space-between'}}>

                <Button
                    containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
                    disabledContainerStyle={{backgroundColor: 'grey'}}
                    style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
                    onPress={()=> this.ourPrediction()}>
                    Shake it!
                  </Button>
                  <Button
                      containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
                      disabledContainerStyle={{backgroundColor: 'grey'}}
                      style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
                      onPress={()=> this.props.navigation.navigate('Page1')}>
                      Home
                    </Button>
            </View>

          </View>
    );
  }
}


class Hard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: [],
      random:
      ["in Mars"

      ],
      nouns:
      [
      "Dogs"],

      verbs:
       [
       "Organize"]

    }
  }
  static navigationOptions = (props) => ({
    // title: 'Hard',
    // headerLeft: <TouchableOpacity onPress={() => props.navigation.navigate('Page1')}><Text style={styles.niceFont}>Back</Text></TouchableOpacity>,

  })

  ourPrediction(){
    var rando = this.state.random;
    var noun = this.state.nouns;
    var verb = this.state.verbs;
    var var1 = noun[Math.floor(Math.random() * noun.length)];
    var var2 = verb[Math.floor(Math.random() * verb.length)];
    var var3 = rando[Math.floor(Math.random() * rando.length)];


    this.setState({display: [var1, var2, var3]});
  }


  render() {
    return (
    //   <View style={styles.container}>
    //     {this.state.display.map(word => (
    //       <Text style={{fontFamily: 'AmericanTypewriter-CondensedBold'}}>{word}</Text>
    //     )
    //   )}
    //   <Button
    //     containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
    //     disabledContainerStyle={{backgroundColor: 'grey'}}
    //     style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
    //     onPress={()=> this.ourPrediction()}>
    //     Shake it!
    //   </Button>
    //
    //
    // </View>


    // <View style={styles.container}>
    //
    //   <View style={styles.backgroundContainer}>
    //
    //     <ImageBackground
    //
    //       source={{uri: 'https://thumbs.gfycat.com/JointYoungFattaileddunnart-max-1mb.gif' }} resizeMode='cover' style={styles.backdrop}> </ImageBackground>
    //     </View>
    //     <Text style={styles.titleContainer}>magic-bot</Text>
    //     <View styles={styles.overLay}>
    //
    //
    //       <Image
    //         source={require('./assets/ball-backijjj.png') } style={styles.logo}/>
    //         </View>
    //         <View styles={styles.backdrop}>
    //         {/* <Button
    //            containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'purple'}}
    //            disabledContainerStyle={{backgroundColor: 'grey'}}
    //            style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
    //            onPress={()=> this.props.navigation.navigate('Page2')}>
    //            easy peasy!
    //          </Button>
    //         <Button
    //           containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'pink'}}
    //           disabledContainerStyle={{backgroundColor: 'grey'}}
    //           style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
    //           onPress={()=> this.props.navigation.navigate('Page3')}>
    //           so random!
    //         </Button>
    //         <Button
    //           containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
    //           disabledContainerStyle={{backgroundColor: 'grey'}}
    //           style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
    //           onPress={()=> this.props.navigation.navigate('Page4')}>
    //           chaos!
    //         </Button> */}
    //         <Button
    //            containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
    //            disabledContainerStyle={{backgroundColor: 'grey'}}
    //            style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
    //            onPress={()=> this.ourPrediction()}>
    //            Shake it!
    //          </Button>
    //          <Button
    //              containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
    //              disabledContainerStyle={{backgroundColor: 'grey'}}
    //              style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
    //              onPress={()=> this.props.navigation.navigate('Page1')}>
    //              Back
    //            </Button>
    //       </View>
    //
    //     </View>
    <View style={styles.container}>


      <View style={styles.backgroundContainer}>

        <ImageBackground

          source={{uri: 'https://thumbs.gfycat.com/JointYoungFattaileddunnart-max-1mb.gif' }} resizeMode='cover' style={styles.backdrop}> </ImageBackground>
      </View>
        <Text style={styles.titleContainer}>magic-bot</Text>
        {/* {this.state.display.map(word => (
          <Text style={{color: 'white'}}>{word}  </Text>
        )
      )} */}
        <View>

          {this.state.display.map(word => (
            <View style={{  zIndex: '4000', top:160}}><Text style={styles.ourText}>{word}  </Text></View>
          )
        )}
          <View><Image
            source={require('./assets/ball-backijjj.png') } style={styles.logo}></Image></View>
            {/* <View style={styles.overLay}>

            </View> */}
            </View>

            <View styles={{flex: 1, justifyContent:'space-between'}}>

              <Button
                  containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
                  disabledContainerStyle={{backgroundColor: 'grey'}}
                  style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
                  onPress={()=> this.ourPrediction()}>
                  Shake it!
                </Button>
                <Button
                    containerStyle={{marginBottom: 10, padding:10, height:50, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
                    disabledContainerStyle={{backgroundColor: 'grey'}}
                    style={{fontSize: 25, color: 'white', fontFamily: 'Courier'}}
                    onPress={()=> this.props.navigation.navigate('Page1')}>
                    Home
                  </Button>
          </View>

        </View>
  );
}
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  titleContainer: {
    // position: 'absolute',
    // top: 0,
    // bottom: 10,
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    fontFamily: 'Courier',
    fontSize: 50,
    color: '#76e088',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  overLay: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logo: {
    width: 300,
    height: 300,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ourText: {
    // flex:1,
    // alignItems: "center",
    // justifyContent: 'center',
    fontFamily: 'Courier',
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  }


  // bottom: {
  //   justifyContent: 'bottom'
  // }
});

const Navigator = StackNavigator({
  Page1: {screen: App},
  Page2: {screen: Easy},
  Page3: {screen: Medium},
  Page4: {screen: Hard},
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
)

export default Navigator;
