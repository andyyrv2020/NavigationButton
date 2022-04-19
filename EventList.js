import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {FlatList} from 'react-native';
import EventCard from './EventCard';

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        const events = require('./data.json').events;
        this.setState({events})
    }

    render() {
          return (
              <View>
                <FlatList
                    data = { this.state.events }
                    renderItem = { ({item}) => <EventCard eventItem = {item} />}
                ></FlatList>
                <Button
                onPress={() => this.props.navigation.navigate('EventForm')}
                title='Add event' />
            </View>
        );
    };
};
