import { readFileSync } from 'fs';
import { join } from 'path';
import React from 'react';

const h = React.createElement;

const BRAND_700 = '#6a47d0';
const BRAND_900 = '#482f94';
const BRAND_950 = '#2d1d5e';

const WIDTH = 1200;
const HEIGHT = 630;

function loadFonts() {
  return [
    {
      name: 'Noto Sans',
      data: readFileSync(
        join(__dirname, '../../static/fonts/NotoSans-Regular.ttf')
      ),
      weight: 400 as const,
      style: 'normal' as const,
    },
    {
      name: 'Noto Sans',
      data: readFileSync(
        join(__dirname, '../../static/fonts/NotoSans-Bold.ttf')
      ),
      weight: 700 as const,
      style: 'normal' as const,
    },
  ];
}

/** Shared layout for all OG cards */
function createCard(
  title: string,
  description: string,
  category: string | null
) {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column' as const,
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, ${BRAND_950} 0%, ${BRAND_900} 40%, ${BRAND_700} 100%)`,
        fontFamily: 'Noto Sans',
        padding: '60px 80px',
        color: '#fff',
      },
    },
    // Top bar: logo text + category badge
    h(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '40px',
        },
      },
      // Logo area
      h(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          },
        },
        // Planet icon (simplified)
        h(
          'svg',
          {
            width: '48',
            height: '48',
            viewBox: '0 0 48 48',
            fill: 'none',
          },
          h('circle', {
            cx: '24',
            cy: '24',
            r: '14',
            stroke: '#c7a7f6',
            strokeWidth: '3',
            fill: 'none',
          }),
          h('ellipse', {
            cx: '24',
            cy: '24',
            rx: '22',
            ry: '8',
            stroke: '#c7a7f6',
            strokeWidth: '2.5',
            fill: 'none',
            transform: 'rotate(-20 24 24)',
          })
        ),
        h(
          'span',
          {
            style: {
              fontSize: '28px',
              fontWeight: 700,
              color: '#e9e0ff',
              letterSpacing: '-0.02em',
            },
          },
          'TestPlanIt'
        )
      ),
      // Category badge
      category
        ? h(
            'div',
            {
              style: {
                display: 'flex',
                backgroundColor: 'rgba(199, 167, 246, 0.2)',
                border: '1px solid rgba(199, 167, 246, 0.4)',
                borderRadius: '20px',
                padding: '6px 20px',
                fontSize: '16px',
                fontWeight: 600,
                color: '#c7a7f6',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.05em',
              },
            },
            category
          )
        : null
    ),
    // Title
    h(
      'div',
      {
        style: {
          display: 'flex',
          flex: 1,
          alignItems: 'center',
        },
      },
      h(
        'h1',
        {
          style: {
            fontSize:
              title.length > 60 ? '42px' : title.length > 40 ? '48px' : '56px',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            margin: 0,
            maxWidth: '1000px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        },
        title
      )
    ),
    // Bottom bar: description + site URL
    h(
      'div',
      {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '40px',
        },
      },
      description
        ? h(
            'p',
            {
              style: {
                fontSize: '20px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.4,
                margin: 0,
                maxWidth: '700px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            },
            description.length > 120
              ? description.slice(0, 117) + '...'
              : description
          )
        : null,
      h(
        'span',
        {
          style: {
            fontSize: '18px',
            color: 'rgba(199, 167, 246, 0.6)',
            whiteSpace: 'nowrap',
          },
        },
        'docs.testplanit.com'
      )
    )
  );
}

/** Docs page renderer */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function docs(data: any) {
  const title = data.metadata?.title || 'Documentation';
  const description = data.metadata?.description || '';

  return [
    createCard(title, description, 'Docs'),
    { width: WIDTH, height: HEIGHT, fonts: loadFonts() },
  ];
}

/** Blog page renderer */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function blog(data: any) {
  if (data.pageType !== 'post') return false;

  const post = data.data;
  const title = post.metadata?.title || 'Blog';
  const description = post.metadata?.description || '';

  return [
    createCard(title, description, 'Blog'),
    { width: WIDTH, height: HEIGHT, fonts: loadFonts() },
  ];
}

/** Pages renderer */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function pages(data: any) {
  const title = data.metadata?.title || 'TestPlanIt';
  const description = data.metadata?.description || '';

  return [
    createCard(title, description, null),
    { width: WIDTH, height: HEIGHT, fonts: loadFonts() },
  ];
}
