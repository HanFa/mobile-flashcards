import React, {Component} from 'react'
import {StyleSheet, Text, View, Platform, ScrollView, Alert, TouchableOpacity} from "react-native"
import {connect} from 'react-redux'
import {gray, white} from "../utils/colors"
import DeckCard from "./DeckCard"


class DashBoard extends Component {

  returnToDashBoard = () => {
    this.forceUpdate()
  }

  render() {
    const {decks} = this.props

    return (
      <View style={styles.container}>
        {
          Object.entries(decks).length > 0 ?
            Object.entries(decks).map(([id, deck]) => (
              <View style={styles.cardContainer} key={id}>
                <DeckCard deck={deck} onPress={() => {
                  this.props.navigation.navigate('DeckPage', {id: id, refresh: this.returnToDashBoard})
                }}/>
              </View>
            )) : <Text style={styles.deckTitle}> No deck currently. </Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row'
  }
})

const mapStateToProps = (state) => {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(DashBoard)
