import React from 'react'
import Card from './Card'

export default props => {

    return (
        <Card title="Sorteio de um Números" purple>
            <div className='Intervalo'>
                <span>
                    <span>Resultado: </span>
                    <strong>5</strong>
                </span>
            </div>
        </Card>
    )
}