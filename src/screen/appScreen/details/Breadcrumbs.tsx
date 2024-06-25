import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { BreadcrumbsProps } from './interface';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs = [] }) => {
     return (
        <View style={styles.breadcrumbs}>
            {breadcrumbs.map((item, index) => (
                <Text key={index} style={styles.breadcrumb}>
                    {item.title}
                </Text>
            ))}
        </View>
    );
};

export default Breadcrumbs;
