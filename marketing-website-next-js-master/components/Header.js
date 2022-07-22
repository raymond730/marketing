import Inner from "../styled/Inner"
import Navbar from "../components/Navbar"
import styled from "styled-components"

const Masthead = styled.header`
  background-image: linear-gradient(90deg, rgba(13, 146, 5, 0.26) 0%, rgba(13, 146, 5, 0.26) 27%, rgba(46, 139, 30, 0.26) 27%, rgba(46, 139, 30, 0.26) 38%, rgba(78, 132, 55, 0.26) 38%, rgba(78, 132, 55, 0.26) 40%, rgba(111, 126, 80, 0.26) 40%, rgba(111, 126, 80, 0.26) 46%, rgba(144, 119, 104, 0.26) 46%, rgba(144, 119, 104, 0.26) 52%, rgba(176, 112, 129, 0.26) 52%, rgba(176, 112, 129, 0.26) 62%, rgba(209, 105, 154, 0.26) 62%, rgba(209, 105, 154, 0.26) 100%), linear-gradient(45deg, rgba(91, 16, 55, 0.26) 0%, rgba(91, 16, 55, 0.26) 11%, rgba(101, 33, 56, 0.26) 11%, rgba(101, 33, 56, 0.26) 23%, rgba(110, 50, 58, 0.26) 23%, rgba(110, 50, 58, 0.26) 27%, rgba(120, 68, 59, 0.26) 27%, rgba(120, 68, 59, 0.26) 37%, rgba(129, 85, 60, 0.26) 37%, rgba(129, 85, 60, 0.26) 48%, rgba(139, 102, 62, 0.26) 48%, rgba(139, 102, 62, 0.26) 83%, rgba(148, 119, 63, 0.26) 83%, rgba(148, 119, 63, 0.26) 100%), linear-gradient(90deg, rgb(196, 44, 233) 0%, rgb(196, 44, 233) 2%, rgb(165, 38, 218) 2%, rgb(165, 38, 218) 7%, rgb(133, 31, 202) 7%, rgb(133, 31, 202) 35%, rgb(102, 25, 187) 35%, rgb(102, 25, 187) 46%, rgb(71, 18, 171) 46%, rgb(71, 18, 171) 69%, rgb(39, 12, 156) 69%, rgb(39, 12, 156) 96%, rgb(8, 5, 140) 96%, rgb(8, 5, 140) 100%);
  color: #fff;
`

const Header = (props) => {
  return (
    <Masthead>
      <Inner>
        <Navbar />
      </Inner>
    </Masthead>
  )
}

export default Header
