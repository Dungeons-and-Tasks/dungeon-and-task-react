import { FC } from 'react';
import { ISocial } from "@/shared/ui/Social/Social.config";

export interface ISocialProps {
  config: ISocial[];
  blank: boolean
}

const Social: FC<ISocialProps> = ({ config, blank }) => {
  return (
    <div className='block_row gap_15 justify-center'>
      { config.map((social) => (
        <a href={ social.href } target={ blank ? '_blank' : '' }>
          { social.icon }
        </a>
      )) }
    </div>
  );
};

export default Social;