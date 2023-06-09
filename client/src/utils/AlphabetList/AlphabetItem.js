import React, { Component } from 'react';

class AlphabetItem extends Component {
    componentDidMount () {
        this.props.registerPos(this.props.id, this.fix.offsetTop)
    }
    render () {
        const { id, suffix } = this.props
        return (
            <div
                style={{
                    textAlign: 'left',
                }}
                ref={(ref) => { this.fix = ref }}
            >
                <div
                    style={{
                        color: '#151515',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        marginBottom: '1rem'
                    }}>
                    {`${id}${suffix}`}
                </div>
                <div
                    style={{
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        marginTop: 4,
                        marginBottom: 8,
                        lineHeight: '2rem'
                    }}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default AlphabetItem;