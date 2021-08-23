
import React  from  'react'
import { View, FlatList } from 'react-native'
import { Guild, GuildProps } from '../../componentes/Guild';
import { GuildIcon } from '../../componentes/GuildIcon';
import { ListDivider } from '../../componentes/ListDivider';
import {styles} from './styles'


type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}


export function Guilds ({handleGuildSelect} : Props ){
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner:  true,
        },
        {
            id: '2',
            name: 'Galera do Gamy',
            icon: 'image.png',
            owner:  true,
        }
    ]
    return(
        <View style={styles.container}>
            <FlatList 
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({item}) =>(
                    <Guild data={item} onPress={() => handleGuildSelect(item)} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                showsVerticalScrollIndicator={false}
                style ={ styles.guilds}
            />


        </View>
    );
}
