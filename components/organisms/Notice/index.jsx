import React from "react";

import * as Styled from "./style";
import List, { ListDirection } from "../../molecules/List";
import ListItem, { ItemSelfOrder } from "../../molecules/ListItem";
import Title, { TitleSize, TitleWeight } from "../../atoms/Title";
import P, { PSize, PWeight, PType } from "../../atoms/P";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import Group from "../../organisms/Group";

const Notice = () => {
  return (
    <>
      <Styled.ContentTitle>공지사항</Styled.ContentTitle>
      <Styled.NoticeContainer>
        <Styled.NoticeImageContainer>
          <Image src="clubPromotion.jpg" fit />
          {/* <Mordal /> */}
        </Styled.NoticeImageContainer>
        <List direction={ListDirection.col} card={true} height="472px">
          <ListItem width="100%" height="auto">
            <Title
              size={TitleSize.s}
              weight={TitleWeight.l}
              marginBottom="2rem"
            >
              😁대학 연합 여행동아리 APM 신입 부원을 모집합니다!!😁
            </Title>
          </ListItem>
          <Styled.NoticeInformationText>
            <P size={PSize.m} weight={PWeight.m} type={PType.gray}>
              대학 연합 여행동아리 APM입니다!
              <br />
              <br />
              저희 동아리는 2012년 5월에 창단한 이후로 열정과 활기를 가진
              매력넘치는 학생들끼리 모여 공식적인 모임, 여행, MT 등 지속적인
              활동을 하고 있습니다.
              <br />
              <br />
              앞으로도 새로 들어오실 11기 여러분들과 함께 더욱 활기찬 APM을
              만들어 나갈 것입니다.
              <br />
              <br />
              여행을 좋아하고 여러 사람들과 함께 활동하고 싶으신 분!
              <br />
              자신의 여행계획을 공유하고 같이 실행해보고 싶으신 분!
              <br />
              무료한 대학생활에 지쳐 삶의 여유를 함께 만끽하고 싶으신 분!
              <br />
              <br />
              살면서 가장 중요하고 소중한 인맥을 만들어 함께 여행하실 분이라면
              대환영입니다.
              <br />
              <br />
              [ APM ]에서 여러분들을 기다립니다.
              <br />
              많이 지원해주세요~^^
              <br />
              <br />
              ■ 모집요강
              <br />
              - 모집 대상 : 서울지역에서 활동이 가능한 서울&amp;경인 2,4년제
              대학생
              <br />
              - 모집 기간 : 2017년 8월 30일 24:00까지
              <br />
              - 모집인원 : 약 60명 (남녀 비율 1:1)
              <br />
              - 합격 발표 : 8월 31일~9월 1일 중으로 개별 문자통보
              <br />
              - 활동 기간 : 2017년 2학기 (한 학기 활동 후 원하시는 분들은 계속
              활동 가능합니다.)
              <br />- 지원 방법 :{" "}
              <a
                href="http://cafe.daum.net/APMFAM/WVSz/53"
                target="_blank"
                rel="noopener"
              >
                http://cafe.daum.net/APMFAM/WVSz/53
              </a>{" "}
              에서 첨부된 지원서를 다운받아 작성 후 ljw_4118@naver.com 으로
              보내주세요.
              <br />
              파일명은 반드시 &lt;이름_학번_학교&gt;순으로 수정 해주시길
              바랍니다.
              <br />
              <br />
              ■ 활동안내
              <br />
              ✔신입기수 환영회: 9월 9일 (토)
              <br />
              ✔11기 MT: 9월 23일~9월 24일
              <br />
              <br />
              (신입기수 환영회, MT 둘 중 하나 반드시 필참해주셔야 합니다!)
              <br />
              <br />
              - 한 달에 두 번 정기모임
              <br />
              - 한 학기에 세 번 정기여행
              <br />
              - 서울 근교 나들이, 송년회, 엠티, 매주 번개 등<br />
              ★ 회비제도 (회비를 왜 낼까 궁금해 하는 분들께!!)
              <br />
              - 회비금액 : 1인당 한 학기 4만원
              <br />
              - 사용목적 : 여행 및 정모 그 외 행사 때에 필요한 용품구매 및 예약
              등을 하고 여행시 1인당 너무나 많은 비용을 내기엔 부담이 되는
              경우가 있어서 부담금을 줄이기 위해
              <br />
              공금으로 사용됩니다.
              <br />
              <br />
              카페에서 지원서 양식을 받으신 다음 작성 후 포스터에 게시된 메일로
              보내주시면 지원 완료입니다. (면접 없음)
              <br />
              <br />
              ■ 문의사항
              <br />
              동아리 관련 및 지원관련 문의사항이 있을 시 아래로 연락바랍니다.
              <br />
              * 문자문의 010-4118-9171 *<br />
              * 카톡문의 realrain0 *<br />
              *APM 카페{" "}
              <a
                href="http://cafe.daum.net/APMFAM/WVSz/53"
                target="_blank"
                rel="noopener"
              >
                http://cafe.daum.net/APMFAM/WVSz/53
              </a>
            </P>
          </Styled.NoticeInformationText>
          <ListItem height="auto" self={ItemSelfOrder.center}>
            <Button width="200px" height="40px">
              가입신청
            </Button>
          </ListItem>
        </List>
      </Styled.NoticeContainer>
      <Styled.ContentTitle>소모임</Styled.ContentTitle>
      <Group />
    </>
  );
};

export default Notice;
