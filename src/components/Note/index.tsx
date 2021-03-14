import { useRef, useEffect, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { ActionButton } from '~components/ActionButton';
import { IconPath } from '~/src/assets/icons';

import { TabIndexes } from '~types';
import { NoteProps } from './Note.types';

export const Note: React.FC<NoteProps> = ({
  item,
  className,
  children,
  handleClose,
  handleChange,
  handleDelete,
  ...props
}) => {
  const overlayRef = useRef(null);

  const classes = classNames(
    'w-full max-w-content text-dark dark:text-light',
    'border-2 border-solid border-base1 rounded-2xl',
    'shadow-lg',
    'bg-base2 dark:bg-base02',
    className
  );

  const placeholder = 'Start typing...';

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value;
    const title = content ? `${content.slice(0, 20)}` : placeholder;

    return handleChange({
      ...item,
      title,
      content,
    });
  };

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (overlayRef?.current === event.target) {
        handleClose();
      }
    }

    document.addEventListener('click', onClickOutside);

    return () => {
      document.removeEventListener('click', onClickOutside);
    };
  }, [overlayRef.current, handleClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 flex justify-center items-center"
    >
      <motion.div className={classes} {...props}>
        <ActionButton
          className="ml-auto"
          icon={IconPath.X}
          tabIndex={TabIndexes.HIGH}
          onClick={handleClose}
          aria-label="Close note editor"
        />
        <div className="flex justify-center p-2">
          <textarea
            className="w-full max-w-text min-h-note resize-none border-0 text-current bg-transparent outline-none"
            id={item.id}
            name="note"
            value={item.content}
            placeholder={placeholder}
            autoFocus
            onChange={onChange}
            tabIndex={TabIndexes.HIGH}
            aria-label="Note editor"
          />
        </div>
        <div className="flex items-center">
          <ActionButton
            className="ml-auto bg-opacity-60 hover:bg-opacity-80"
            color="bg-red"
            icon={IconPath.TRASH}
            tabIndex={TabIndexes.HIGH}
            onClick={(e) => handleDelete(e, item.id)}
            aria-label="Close note editor"
          />
        </div>
      </motion.div>
    </div>
  );
};
