import React from 'react'
import Row from './Row'

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  handleChangedCell = ({ x, y }, value) => {
    const newData = Object.assign({}, this.state.data)
    if (!newData[y]) newData[y] = {}
    newData[y][x] = value
    this.setState({ data: newData })
  }
  updateCells = () => {
    this.forceUpdate()
  }
  render() {
    const rows = []
    for (let y = 0; y < this.props.y + 1; y += 1) {
      const rowData = this.state.data[y] || {}
      rows.push(
        <Row
          handleChangedCell={this.handleChangedCell}
          updateCells={this.updateCells}
          key={y}
          y={y}
          x={this.props.x + 1}
          rowData={rowData}
        />
      )
    }
    return <div>{rows}</div>
  }
}






export default Table
