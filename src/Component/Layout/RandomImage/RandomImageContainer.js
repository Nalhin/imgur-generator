import { connect } from 'react-redux';

import RandomImage from './RandomImage';
import { getRandom, getRandomSetFav } from '../../../Module/actions/random';
import { incrementPosition, decrementPosition } from '../../../Module/actions/position';
import { deleteFavorites } from '../../../Module/actions/favorites';

const mapStateToProps = state => {
    return { random: state.random, position: state.position };
};

const mapDispatchToProps = dispatch => {
    return {
        getRandom: () => {
            dispatch(getRandom());
        },
        incrementPosition: () => {
            dispatch(incrementPosition());
        },
        decrementPosition: () => {
            dispatch(decrementPosition());
        },
        setFav: image => {
            dispatch(getRandomSetFav(image));
        },
        deleteFav: id => {
            dispatch(deleteFavorites(id));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RandomImage);
