import React from "react";
import {View, Text, StyleSheet, ImageBackground, Button, Image, FlatList} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import Ionicons from 'react-native-vector-icons/Ionicons';
// import { HermesBadge } from "react-native/Libraries/NewAppScreen";
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

type ItemData = {
    id: number
    title: string
    likes: string
};

const Data: ItemData[] = [
    {
        id:1,
        title:"I'm Fine - IMAMU Remix",
        likes:'823,428'
    },
    {
        id:2,
        title:"I'm Fine",
        likes:'1,843,856'
    },
    
]

type ItemProps = {
    index:number
    title: string, 
    likes: string
};

const Item = ({index, title, likes}: ItemProps) => (
    <View style={{flex:1, flexDirection:'row', margin:10, marginHorizontal:30, alignItems:'center'}}>
        <Text style={{fontSize: 18, color:'white', justifyContent:'center', alignContent:'center', textAlign:'center', padding:10}}>{index}</Text>
        <Image 
            style={{width:45, height:45, marginHorizontal:10}}
            source={require('../assets/imgs/bg.jpg')}/>
        <View style={{flex:1, flexDirection:'column'}}>
            <Text style={[styles.itemTitle]}>{title}</Text>
            <Text style={styles.itemLikes}>{likes}</Text>
        </View>
        
        <Ionicons style={{marginLeft:20, padding:10, alignContent:'center', justifyContent:'center'}} name='md-ellipsis-horizontal-sharp' size={30} color={'#fffa'}/>
    </View>
)

const SearchScreen = () =>{
    const renderItem = (item :ItemProps) => <Item index={item.index} title={item.title} likes={item.likes} />
    
    return(
        <>
            <View style={{flex:1, }}>
            <ImageBackground
                source={require('../assets/imgs/bg.jpg')}
                style={styles.bg_img}
                resizeMode='cover'
                >
                    <Ionicons name="chevron-back-outline" size={32} color="#fff" style={[styles.backBtn, {margin:30}]} />
                    <Text style={ styles.heading}>High Klassified</Text>
                </ImageBackground>
                <LinearGradient
                    style={{flex:.6}}
                    start={{x:0,y:0}}
                    end={{x:0,y:.4}}
                    colors={[ '#343434', '#000000']}>
                        <View style={{
                        flex:.35,  
                        paddingHorizontal:30, 
                        paddingVertical:0, 
                        flexDirection:'row', 
                        justifyContent:'space-between',
                        alignItems:'center',
                        position:'relative',
                        top:0,
                    
                        }}>
                            <View style={{flex:1,}}>
                                <Text style={{flex:.3, position:'relative', color:'#fff6',marginBottom:5, fontSize: 14}}>Abalaleli benyanga anbangu-166,307</Text>
                                <View style={{flex:.4, position:'relative', width:'100%',margin:0, flexDirection:'row'}}>
                                    <Text style={[styles.follow]}>OBALANDELAYO</Text>
                                    <Ionicons style={{marginLeft:20, padding:10, alignContent:'center', justifyContent:'center'}} name='md-ellipsis-horizontal-sharp' size={30} color={'#fffa'}/>
                                </View>
                            </View>
                            <View style={[styles.play]}>
                                <Ionicons style={{flex:.9, alignContent:'center', justifyContent:'center', }} name="play" size={30} color={'white'} />
                                <View style={[styles.shuffle, ]}>
                                    <MaterialCommunityIcons style={{}} name="shuffle-variant" color={'#393'} size={20}/>
                                </View>
                            </View>
                            
                        </View>
                                
                        <View style={[{flex:.2, flexDirection:"row", padding:20, paddingHorizontal:30}]}>
                            <View >
                                <Image 
                                    source={require('../assets/imgs/bg.jpg')}
                                    resizeMode="cover"
                                    style={{width:55, height:55, borderRadius:40, overflow:"hidden"}} />
                                <View style={[styles.favorite]}>
                                    <MaterialIcons name="favorite" size={20} color="white" />
                                </View>
                            </View>
                            <View style={{marginHorizontal:10 , flex:.8, flexDirection:"column", padding:10}}>
                                {/* <Text style={{color:"white", fontFamily:'ProductSansRegular',  fontSize: 16}}>Izingoma Ezithandiwe</Text> */}
                                <Text style={{color:"white",  fontSize: 16}}>Izingoma Ezithandiwe</Text>
                                <View style={{flex:1, flexDirection:"row", alignItems:"center", }}>
                                    <Text style={{color:'#fff6', fontSize: 14}}>5 izingoma </Text>
                                    <View style={[styles.dot, {width:5, height:5, marginHorizontal:2}]}/>
                                    <Text style={{color:'#fff6', fontSize: 14}}>High Klassified</Text>
                                </View>
                            </View>
                            <View style={{flex:.2,flexDirection:'row',alignItems:'center', justifyContent:'flex-end'}}>
                                <Entypo name="chevron-thin-right" size={30} color="#fff5"/>
                            </View>
                        </View>
                        <View style={{flex:.6, }}>
                            <Text style={{fontSize: 24, color:'white', fontWeight:'bold', paddingHorizontal:30}}>Okudumile</Text>
                            <FlatList
                                style={{ padding:0, margin:0, marginTop:20, flex:1}}
                                data={Data}
                                renderItem={({item}) => <Item index={item.id} title={item.title} likes={item.likes} />}
                                
                            />
                        </View>
                </LinearGradient>
            </View>
            

        </>
    )
}



const styles = StyleSheet.create({
    bg_img:{
        flex:.6, 
        width:"100%", 
        height:"100%", 
        overflow:"hidden",
    },
    heading:{
        fontSize: 45, 
        // fontFamily: "ProductSansBlack",
        color:'white', 
        top: "80%",
        fontWeight:"bold",
        position:'relative',
        paddingHorizontal:35,

    },
    backBtn:{
        width:40,
        position:'absolute',
        height:40,
        padding: 2,
        backgroundColor: "#00000080",
        opacity:1,
        borderRadius: 20
    },
    follow:{
        color:'white', 
        borderColor:'white', 
        borderWidth:1,
        padding: 10,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:10,
        fontSize: 14,
        width:'auto',
        fontWeight:'bold'

    },
    play:{
        
        width:55,
        height:55,
        padding:12,
        backgroundColor:'#393',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:70,
        flex:.1,
    },
    shuffle:{
        position:'absolute',
        top: '130%',
        left: '110%',
        padding:3,
        flex:.3,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:20
    },
    favorite:{
        width:35,
        height: 35,
        borderRadius: 50,
        backgroundColor:"#393",
        alignItems:"center",
        justifyContent:"center",
        bottom:25,
        left: 30,
        borderColor:'black',
        borderWidth:5

    },
    dot:{
        borderRadius:100,
        width: 50,
        height:50,
        backgroundColor: "#fff6"
    },
    itemTitle:{
        padding:2,
        margin:0,
        color:'white',
        // fontFamily: 'ProductSansLight',
        fontSize: 16,
        textAlign:'left',
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        
    },
    itemLikes:{
        color:'#fff6',
        // fontFamily:'ProductSansRegular',
        fontSize: 16,
        padding:2,
    }

})

export default SearchScreen