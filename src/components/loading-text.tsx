import styled from 'styled-components';

const LoadingText = styled.div`
  font-size: 30px;
  color: var(--color_label-highlighted);
`;

enum LoadingLabel {
  Searching = '正在寻找设备...',
  Loading = '加载中...',
}

type Props = {
  isSearching: boolean;
};

export default function (props: Props) {
  return (
    <LoadingText data-tid="loading-message">
      {props.isSearching ? LoadingLabel.Searching : LoadingLabel.Loading}
    </LoadingText>
  );
}
