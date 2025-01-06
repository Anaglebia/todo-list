type Item = {
    id: number;
    name: string;
    done: boolean;
};

type ListItemProps = {
    item: Item;
    onChange: (id: number, done: boolean) => void;
};

const ListItem: React.FC<ListItemProps> = ({ item, onChange }) => {
    const handleCheckboxChange = () => {
        onChange(item.id, !item.done);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={item.done}
                onChange={handleCheckboxChange}
            />
            <label>{item.name}</label>
        </div>
    );
};

export default ListItem;
