import React, { Component } from 'react';
import s from './param-editor.module.css';
import { PText } from '@/shared/ui/text/PText';

// Интерфейсы
interface Param {
  id: number;
  name: string;
  // type: ‘string’;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  // colors: Color[]
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  editedModel: Model;
}

class ParamEditor extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editedModel: {
        paramValues: props.params.map(param => ({
          paramId: param.id,
          value: this.getParamValue(param.id) || '',
        })),
      },
    };
  }

  getParamValue(paramId: number): string | undefined {
    const param = this.props.model.paramValues.find(
      paramValue => paramValue.paramId === paramId
    );
    return param ? param.value : undefined;
  }

  handleParamChange = (paramId: number, value: string) => {
    this.setState(prevState => ({
      editedModel: {
        ...prevState.editedModel,
        paramValues: prevState.editedModel.paramValues.map(paramValue =>
          paramValue.paramId === paramId
            ? {paramId: paramValue.paramId, value}
            : paramValue
        ),
      },
    }));
  };

  getModel(): Model {
    return this.state.editedModel;
  }

  render() {
    return (
      <div className={s.card}>
        {this.props.params.map(param => (
          <div className={s.param} key={param.id}>
            <label htmlFor={`param-${param.id}`}>
              <PText>{param.name}</PText>
            </label>
            <input
              className={s.input}
              id={`param-${param.id}`}
              type="text"
              value={this.getParamValue(param.id) || ""}
              onChange={e => this.handleParamChange(param.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ParamEditor;
