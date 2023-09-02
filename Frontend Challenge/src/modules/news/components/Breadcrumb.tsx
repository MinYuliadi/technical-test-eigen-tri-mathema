import { Breadcrumb as AntdBreadcrumb } from 'antd'

interface iBreadcrumb {
    id: string | undefined,
    onClick: () => void
}

const Breadcrumb = (props: iBreadcrumb) => {
    return (
        <AntdBreadcrumb
            items={[
                {
                    title: "Home",
                },
                {
                    title: "News",
                    className: "cursor-pointer",
                    onClick: props.onClick
                },
                props.id ? {
                    title: props.id,
                } : {
                    title: null
                }
            ]}
        />
    )
}

export default Breadcrumb