'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { listPdrs } from '../../actions';
import { lastUpdated } from '../../utils/format';
import { tableHeader, tableRow, tableSortProps } from '../../utils/table-config/pdrs';
import List from '../table/list-view';

import Overview from '../app/overview';

var PdrOverview = React.createClass({
  displayName: 'PdrOverview',

  propTypes: {
    dispatch: React.PropTypes.func,
    pdrs: React.PropTypes.object
  },

  renderOverview: function () {
    const overview = [
      [2, 'Errors'],
      ['200k', 'Active PDR\'s'],
      ['200k', 'Completed PDR\'s']
    ];
    return <Overview items={overview} inflight={false} />;
  },

  generateQuery: function () {
    return {limit: 10};
  },

  render: function () {
    const { list } = this.props.pdrs;
    const { count, queriedAt } = list.meta;
    // create the overview boxes
    const overview = this.renderOverview();
    return (
      <div className='page__component'>
        <section className='page__section'>
          <h1 className='heading--large heading--shared-content'>PDRs Overview</h1>
          {lastUpdated(queriedAt)}
          {overview}
        </section>
        <section className='page__section'>
          <div className='heading__wrapper--border'>
            <h2 className='heading--medium heading--shared-content'>Recently Active PDRs{count ? ` (${count})` : null}</h2>
          </div>

          <List
            list={list}
            dispatch={this.props.dispatch}
            action={listPdrs}
            tableHeader={tableHeader}
            tableRow={tableRow}
            tableSortProps={tableSortProps}
            query={this.generateQuery()}
          />
        </section>
      </div>
    );
  }
});

export default connect(state => state)(PdrOverview);