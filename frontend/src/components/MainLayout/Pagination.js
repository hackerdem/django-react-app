import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
}

const defaultProps = {
    initialPage: 1,
    pageSize: 2
}

class Pagination  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pager:{}
        };
    }

    componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage)
        }
    }

    componentDidUpdate(prevProps,prevState){
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page){
        var {items,pageSize} = this.props;
        var pager = this.state.pager;
        if (page < 1 || page > pager.totalPages) {
            return;
        }
        pager = this.getPager(items.length, page, pageSize);
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex +1);
        this.setState({pager:pager});
        this.props.onChangePage(pageOfItems);
        

    }

    getPager(totalItems, currentPage, pageSize) {
        currentPage = currentPage || 1;
        pageSize = pageSize || 4;

        var totalPages = Math.ceil(totalItems/pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;

        }else{
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage +i);
        return {
            totalItems: totalItems,
            currentPage:currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages  
        };
    }
render(){
    var pager = this.state.pager;
    if (!pager.pages || pager.pages.length <= 1) {
      return null
  }
    return (
          <MDBRow>
            <MDBCol className="row d-flex justify-content-center">
              <MDBPagination circle>
                <MDBPageItem className={pager.currentPage===1 ? 'disabled' : '' }>
                  <MDBPageNav onClick={() => this.setPage(1)} className="page-link">
                    <span>First</span>
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem className={pager.currentPage === 1 ? 'disabled' : ''}>
                  <MDBPageNav className="page-link" onClick={() => this.setPage(pager.currentPage - 1)} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </MDBPageNav>
                </MDBPageItem>
                {pager.pages.map((page, index) =>
                  <MDBPageItem className={pager.currentPage === page ? 'active' : ''}>
                    <MDBPageNav onClick={() => this.setPage(page)} key={index} className='page-link'>{page}<span className='sr-only'></span>
                    </MDBPageNav>
                  </MDBPageItem>   
                )}
                <MDBPageItem>
                  <MDBPageNav className={pager.currentPage === pager.totalPages ? 'disabled page-link' : 'page-link'} onClick={() => this.setPage(pager.currentPage + 1)} >
                    &raquo;
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav className={pager.currentPage === pager.totalPages ? 'disabled page-link' : 'page-link'} onClick={() => this.setPage(pager.totalPages)}>
                    Last
                  </MDBPageNav>
                </MDBPageItem>
              </MDBPagination>
            </MDBCol>
    </MDBRow>
    )

}
}
Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;