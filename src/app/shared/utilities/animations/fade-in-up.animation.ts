import {
  animate,
  sequence,
  style,
  transition,
  trigger
} from '@angular/animations';

export const fadeInUpTextAnimation = trigger('fadeInUpTextAnimation', [
  transition('void => *', [
    style({
      height: '*',
      opacity: '0',
      transform: 'translateY(50px)',
      'box-shadow': 'none'
    }),
    sequence([
      animate(
        '.5s cubic-bezier(0.165,0.84,0.44,1)',
        style({ height: '*', opacity: 1, transform: 'translateY(0)' })
      )
    ])
  ])
]);
export const fadeInUpTileAnimation = trigger('fadeInUpTileAnimation', [
  transition('void => *', [
    style({
      height: '*',
      opacity: '0',
      transform: 'translateY(150px)',
      'box-shadow': 'none'
    }),
    sequence([
      animate(
        '.5s cubic-bezier(0.165,0.84,0.44,1)',
        style({ height: '*', opacity: 1, transform: 'translateY(0)' })
      )
    ])
  ])
]);
