import React from 'react'
import { DatePicker} from 'antd';
import 'antd/dist/antd.min.css'

class PickerSizesDemo extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const { size } = this.state;
    return (
      <div>
        <DatePicker size={size} placeholder={'请选择生日'} />
      </div>
    );
  }
}
export default PickerSizesDemo