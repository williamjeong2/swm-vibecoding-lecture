// 애니메이션 비활성화: 모든 훅이 정적인 "보이는" 상태를 리턴한다.
// 슬라이드 뷰어와 영상 모두 즉시 완성된 화면을 보여준다.

export const useFadeIn = (_delay = 0, _duration = 20) => {
  return { opacity: 1, transform: "none" };
};

export const useSpringIn = (_delay = 0) => {
  return { opacity: 1, transform: "none" };
};

export const useFadeOut = (_start: number, _duration = 15) => {
  return { opacity: 1 };
};
